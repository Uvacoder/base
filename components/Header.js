import { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'
import SvgComponent from '@/components/SVG'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { AppContext } from '@/context/app-context'
import { useRouter } from 'next/router'
import CharmHome from '@/lib/icon/CharmHome'
import CharmStack from '@/lib/icon/CharmStack'
import CharmPerson from '@/lib/icon/CharmPerson'
import CharmSearch from '@/lib/icon/CharmSearch'
import CharmBookmark from '@/lib/icon/CharmBookmark'
import CharmSun from '@/lib/icon/CharmSun'
import CharmMoon from '@/lib/icon/CharmMoon'

const NavBar = () => {
  const locale = useLocale()
  const router = useRouter()
  const links = [
    {
      id: 0,
      name: locale.NAV.INDEX,
      to: BLOG.path || '/',
      show: true,
      icon: <CharmHome />
    },
    {
      id: 1,
      name: locale.NAV.ABOUT,
      to: '/about',
      show: BLOG.showAbout,
      icon: <CharmPerson />
    },
    {
      id: 2,
      name: locale.NAV.PROJECT,
      to: '/project',
      show: BLOG.showProject,
      icon: <CharmStack />
    },
    {
      id: 3,
      name: locale.NAV.HIGHLIGHT,
      to: '/highlight',
      show: BLOG.showHighlight,
      icon: <CharmBookmark />
    },
    {
      id: 4,
      name: locale.NAV.SEARCH,
      to: '/search',
      show: true,
      icon: <CharmSearch />
    }
  ]
  const { context, setContext } = useContext(AppContext)

  const toggle = () => {
    document.documentElement.classList.toggle('dark')
    setContext({ isDark: !context.isDark })
  }
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <div key={link.id}>
                <li
                  key={link.id}
                  className="rounded ml-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 nav cursor-pointer hidden md:flex"
                >
                  <Link href={link.to}>
                    <a>{link.name}</a>
                  </Link>
                </li>
                <button
                  aria-label={link.name}
                  title={link.name}
                  type="button"
                  className="w-8 h-8 p-1 ml-1 rounded sm:ml-4 hover:scale-110 active:scale-90 flex items-center justify-center transition-transform duration-200 lg:hidden md:hidden"
                  onClick={() => router.push(link.to)}
                >
                  {link.icon}
                </button>
              </div>
            )
        )}
        <li className="block ml-4 nav text-gray-400">
          {context.isDark
            ? (
            <>
              <IoSunnyOutline
                onClick={toggle}
                className="w-6 h-6 -mt-0.5 cursor-pointer hover:text-white hover:scale-110 active:scale-90 transition-transform duration-200 hidden md:flex"
              />
              <CharmSun
                onClick={toggle}
                className="w-5 h-5 mt-1.5 -ml-2 mr-3 cursor-pointer hover:text-white hover:scale-110 active:scale-90 transition-transform duration-200 md:hidden lg:hidden"
              />
            </>
              )
            : (
            <>
              <IoMoonSharp
                onClick={toggle}
                className="w-5 h-5 cursor-pointer hover:text-black hover:scale-110 active:scale-90 transition-transform duration-200  hidden md:flex"
              />
              <CharmMoon
                onClick={toggle}
                className="w-5 h-5 mt-1.5 -ml-2 mr-3 cursor-pointer hover:text-black hover:scale-110 active:scale-90 transition-transform duration-200 md:hidden lg:hidden"
              />
            </>
              )}
        </li>
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="grid place-items-start">
                <SvgComponent className="h-10" />
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-thin text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-normal text-day dark:text-night header-name">
              {BLOG.title}
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
