import React from 'react'
import { FaMapMarker, FaUserAlt, FaCartPlus } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';

function Navbar() {
  return (
      <div className="container max-w-full sticky top-0 z-10 navbar bg-lime-50">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li className="dropdown"><a>SHOP</a>
                          <ul tabIndex={0} className=" absolute top-0 menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-60">
                              <li><Link href="/fruits">ALL FRUITS</Link></li>
                              <li><Link href="/fruitscombo">FRUIT COMBOS</Link></li>
                              <li><a>RETURN AND REPLACEMENT</a></li>
                              <li><Link href="/community">COMMUNITY BUYING</Link></li>
                          </ul>
                      </li>
                      <li className="dropdown"><a>LEARN</a>
                          <ul tabIndex={0} className=" absolute top-0 menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-60">
                              <li><Link href="/ourstory">OUR STORY</Link></li>
                              <li><Link href="/whykimaye">WHY KIMAYE</Link></li>
                              <li><Link href="/traceability">TRACEABILITY</Link></li>
                          </ul>
                      </li>
                      <li><Link href="/grow">GROW</Link></li>
                  </ul>
              </div>
          </div>
          <div className="navbar-center">
              <p className="btn btn-ghost normal-case text-xl">
                  <Link href="#"><Image src='/website-logo_400x@2x.avif' alt="logo" width={90} height={40} /></Link>
              </p>
          </div>
          <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                  <p className='text-lg'><FaMapMarker /></p>
              </button>
              <button className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                      <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
              </button>
              <button className="btn btn-ghost btn-circle">
                  <p className='text-lg'><FaUserAlt /></p>
              </button>
              <button className="btn btn-ghost btn-circle">
                  <p className='text-lg'><FaCartPlus /></p>
              </button>
          </div>
      </div>
  )
}

export default Navbar