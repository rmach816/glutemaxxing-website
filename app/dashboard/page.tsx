'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Navigation from '@/components/navigation'
import { LogOut, TrendingUp, Calendar, Award, Activity } from 'lucide-react'
import Image from 'next/image'

interface UserStats {
  workoutsCompleted: number
  totalMinutes: number
  totalCalories: number
  photosAnalyzed: number
  currentStreak: number
  longestStreak: number
}

interface Score {
  id: string
  overall_score: number
  created_at: string
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<UserStats | null>(null)
  const [scores, setScores] = useState<Score[]>([])
  const [workoutDates, setWorkoutDates] = useState<string[]>([])

  useEffect(() => {
    checkUser()
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user)
        loadUserData(session.user.id)
      } else {
        setUser(null)
        router.push('/')
      }
    })
  }, [router])

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUser(session.user)
        await loadUserData(session.user.id)
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error('Error checking user:', error)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const loadUserData = async (userId: string) => {
    try {
      // Load stats
      const { data: workouts } = await supabase
        .from('workout_sessions')
        .select('completed_at, duration_minutes, estimated_calories')
        .eq('user_id', userId)
        .not('completed_at', 'is', null)

      const { data: photos, error: photosError } = await supabase
        .from('scores')
        .select('id, overall_score, created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(10)
      
      if (photosError) {
        console.error('Error loading photos:', photosError)
      }

      // Calculate stats
      const totalWorkouts = workouts?.length || 0
      const totalMinutes = workouts?.reduce((sum, w) => sum + (w.duration_minutes || 0), 0) || 0
      const totalCalories = workouts?.reduce((sum, w) => sum + (w.estimated_calories || 0), 0) || 0
      const totalPhotos = photos?.length || 0

      // Calculate streak (simplified - consecutive days with workouts)
      const workoutDatesSet = new Set(
        workouts?.map(w => new Date(w.completed_at).toISOString().split('T')[0]) || []
      )
      const dates = Array.from(workoutDatesSet).sort()
      
      let currentStreak = 0
      let longestStreak = 0
      let tempStreak = 0
      const today = new Date().toISOString().split('T')[0]
      
      for (let i = dates.length - 1; i >= 0; i--) {
        const date = dates[i]
        const prevDate = i > 0 ? dates[i - 1] : null
        const daysDiff = prevDate 
          ? Math.floor((new Date(date).getTime() - new Date(prevDate).getTime()) / (1000 * 60 * 60 * 24))
          : 0

        if (daysDiff === 1 || (i === dates.length - 1 && date === today)) {
          tempStreak++
          if (i === dates.length - 1) currentStreak = tempStreak
          longestStreak = Math.max(longestStreak, tempStreak)
        } else {
          tempStreak = 1
        }
      }

      setStats({
        workoutsCompleted: totalWorkouts,
        totalMinutes,
        totalCalories,
        photosAnalyzed: totalPhotos,
        currentStreak,
        longestStreak,
      })

      setScores(photos || [])
      setWorkoutDates(dates)
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Progress</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.workoutsCompleted || 0}</div>
            <div className="text-sm text-gray-600">Workouts Completed</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.totalMinutes || 0}</div>
            <div className="text-sm text-gray-600">Total Minutes</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.currentStreak || 0}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.photosAnalyzed || 0}</div>
            <div className="text-sm text-gray-600">Photos Analyzed</div>
          </div>
        </div>

        {/* Score History */}
        {scores.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Score History</h2>
            <div className="space-y-4">
              {scores.map((score, index) => (
                <div key={score.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">
                      {new Date(score.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {score.overall_score.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar View */}
        {workoutDates.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Workout Calendar</h2>
            <div className="text-sm text-gray-600 mb-4">
              {workoutDates.length} workout day{workoutDates.length !== 1 ? 's' : ''} tracked
            </div>
            <div className="grid grid-cols-7 gap-2">
              {workoutDates.slice(-28).map((date) => (
                <div
                  key={date}
                  className="aspect-square bg-purple-100 rounded-lg flex items-center justify-center text-xs text-purple-700 font-medium"
                >
                  {new Date(date).getDate()}
                </div>
              ))}
            </div>
          </div>
        )}

        {stats?.workoutsCompleted === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <p className="text-gray-600 text-lg mb-4">No progress data yet</p>
            <p className="text-gray-500">Complete workouts in the app to see your progress here!</p>
          </div>
        )}
      </div>
    </div>
  )
}

