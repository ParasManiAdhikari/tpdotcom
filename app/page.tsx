'use client'

import { useState } from 'react'
import { Heart, Music, GamepadIcon, BookOpen, Link2, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Window from '@/components/Window'

export default function RetroWebsite() {
  const [visitorCount, setVisitorCount] = useState(1337)

  const tracks = [
    { title: 'Retro Beats', artist: 'DJ Pixel', category: 'Electronic', length: '3:45', id: 1 },
    { title: 'Synthwave Dreams', artist: 'DJ Neon', category: 'Synthwave', length: '4:00', id: 2 },
    { title: 'Pixelated World', artist: 'DJ Retro', category: 'Chiptune', length: '2:50', id: 3 },
    { title: 'Cosmic Journey', artist: 'DJ Stellar', category: 'Ambient', length: '5:30', id: 4 },
  ]

  return (
    <div className="min-h-screen bg-pink-50" style={{
      backgroundImage: `
        radial-gradient(#ff69b440 1px, transparent 1px),
        radial-gradient(#ff69b440 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px'
    }}>
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-4 animate-pulse font-pixel text-4xl font-bold tracking-wide text-green-600">
            ⋆｡°✩ browse lovekinesis.com on high dosages only! ✩°｡⋆
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[250px_1fr_250px]">
          {/* Left Sidebar */}
          <div className="space-y-4">
            <Window title="main menu ♡">
              <nav className="space-y-2 p-4">
                {[ 
                  { icon: Heart, text: 'about' },
                  { icon: Music, text: 'music + lyrics' },
                  { icon: GamepadIcon, text: 'games' },
                  { icon: BookOpen, text: 'blog' },
                  { icon: Link2, text: 'links' },
                  { icon: MessageSquare, text: 'guestbook' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-pink-700 transition-colors hover:bg-pink-100"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-pixel">{item.text}</span>
                  </a>
                ))}
              </nav>
            </Window>

            <Window title="visitor count ♡">
              <div className="p-4 text-center font-pixel text-pink-700">
                {visitorCount.toString().padStart(6, '0')}
              </div>
            </Window>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Window title="♡ about me ♡">
              <div className="space-y-4 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {tracks.map((track) => (
                    <div key={track.id} className="rounded-lg bg-pink-200/50 p-2">
                      <Link
                        href={`/track`} // Link to the track detail page
                        className="font-pixel text-pink-700 hover:underline"
                      >
                        <div>{track.title} - {track.artist}</div>
                        <div className="text-sm text-pink-600">
                          Category: {track.category} | Length: {track.length}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <p className="text-center font-pixel text-pink-700">
                  hi! i make electronic music and play lots of games ♡
                </p>
              </div>
            </Window>

            <Window title="♡ updates ♡">
              <div className="space-y-2 p-4 font-pixel text-pink-700">
                <p>→ new song released! check my music page</p>
                <p>→ updated my gaming collection</p>
                <p>→ added new pixel art to gallery</p>
              </div>
            </Window>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <Window title="currently playing ♡">
              <div className="space-y-2 p-4">
                <div className="rounded-lg bg-pink-100 p-3">
                  <h3 className="font-pixel text-green-600">Fire Emblem</h3>
                  <p className="text-sm text-pink-600">Chapter 7: The Sealed Forest</p>
                </div>
                <div className="rounded-lg bg-pink-100 p-3">
                  <h3 className="font-pixel text-green-600">Xenoblade 3</h3>
                  <p className="text-sm text-pink-600">45 hours played</p>
                </div>
              </div>
            </Window>

            <Window title="status ♡">
              <div className="p-4">
                <p className="font-pixel text-pink-700">new audio just added! <br/> check it out!!</p>
              </div>
            </Window>

            <Window title="random stuff ♡">
              <div className="grid grid-cols-3 gap-2 p-4">
                {[...Array(9)].map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded bg-pink-100 transition-colors hover:bg-pink-200"
                  />
                ))}
              </div>
            </Window>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <div className="inline-flex gap-4">
            {['mac', 'no-ie', 'keyboard', 'firefox', 'notepad'].map((icon) => (
              <div
                key={icon}
                className="h-8 w-8 rounded bg-gray-200"
                title={icon}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
