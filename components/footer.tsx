import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            <ul className="flex justify-center space-x-4 mt-2">
            <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer