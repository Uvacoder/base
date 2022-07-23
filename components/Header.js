import { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'
import SvgComponent from '@/components/SVG'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { AppContext } from '@/context/app-context'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.PROJECT, to: '/project', show: BLOG.showProject },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
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
              <li
                  key={link.id}
                  className="block rounded ml-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 nav cursor-pointer"
                >
                <Link href={link.to}>
                    <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
        <li className="block ml-4 nav text-gray-400">
          {context.isDark
            ? (
            <IoSunnyOutline
              onClick={toggle}
              className="w-6 h-6 -mt-0.5 cursor-pointer hover:text-white hover:scale-110 active:scale-90 transition-transform duration-200"
            />
              )
            : (
            <IoMoonSharp
              onClick={toggle}
              className="w-5 h-5 cursor-pointer hover:text-black hover:scale-110 active:scale-90 transition-transform duration-200"
            />
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
              {BLOG.title} |{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
