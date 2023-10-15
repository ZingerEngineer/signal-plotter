import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../svgs/logo.svg'
import { useEffect, useState } from 'react'

interface navigationItem {
  index: number
  name: string
  link: string
  current: boolean
  functionality?: React.MouseEventHandler<HTMLAnchorElement>
}

function classNames(...classes: (boolean | string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const [navigationArray, setNavigationArray] = useState<navigationItem[]>([
    { index: 0, name: 'Welcome', link: '/welcome', current: false },
    {
      index: 1,
      name: 'Fourier Transform',
      link: '/fourier-to-time',
      current: false
    },
    {
      index: 2,
      name: 'Time Transform',
      link: '/time-to-fourier',
      current: false
    }
  ])
  const location = useLocation()
  useEffect(() => {
    const currentTab = navigationArray.find(
      (item) => item.link === location.pathname
    )
    if (!currentTab) return
    currentTab.current = true
    const filteredCurrentTabArray = navigationArray
      .filter((item) => item.link !== location.pathname)
      .map((item) => {
        item.current = false
        return item
      })
    setNavigationArray(
      [currentTab, ...filteredCurrentTabArray].sort(function (a, b) {
        return a.index - b.index
      })
    )
  }, [location])

  return (
    <Disclosure
      as="nav"
      className="bg-gray-600 hover:bg-gray-500 duration-100 border-b-gray-600 border-t-gray-600"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to="/welcome"
                    className="block h-8 w-auto lg:hidden "
                  >
                    <img
                      className=" h-8 w-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                      src={logoImage}
                      alt="Your Company"
                    />
                  </Link>
                  <Link
                    to="/welcome"
                    className="hidden h-8 w-auto lg:block"
                  >
                    <img
                      className="h-8 w-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                      src={logoImage}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationArray.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current
                            ? ' text-white  border-solid border-white border-2 hover:bg-gray-300/30 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:duration-200'
                            : 'text-white hover:bg-gray-700/50 hover:text-white',
                          'rounded-md px-2 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationArray.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={classNames(
                    item.current
                      ? 'text-white bg-orange-400 hover:bg-orange-300 hover:duration-200'
                      : 'text-white hover:bg-gray-700/50 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
