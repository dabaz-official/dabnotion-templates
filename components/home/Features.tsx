import {
  Clock,
  Database,
  GalleryVerticalEnd,
  LayoutPanelLeft,
  SquareCheck,
  Users
} from 'lucide-react'

const features = [
  {
    name: 'Templates for All Needs',
    description:
      'From daily planners to detailed project trackers, there’s something for everyone.',
    icon: GalleryVerticalEnd,
  },
  {
    name: 'Time-Saving',
    description:
      'Pre-designed templates save you time on setup.',
    icon: Clock,
  },
  {
    name: 'Collaborative',
    description:
      'Enable seamless team collaboration with templates for teams.',
    icon: Users,
  },
  {
    name: 'Customizable Layouts',
    description:
      'Easily modify templates to fit your specific needs.',
    icon: LayoutPanelLeft,
  },
  {
    name: 'Task Management',
    description:
      'Includes task lists, kanban boards, calendars, and to-do lists to keep you organized.',
    icon: SquareCheck,
  },
  {
    name: 'Database Functionality',
    description:
      'Manage relational databases for structured information.',
    icon: Database,
  },
]

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Stop feeling overwhelmed
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Use our Notion templates to stay organized with yourself, your team, or your company. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none text-center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-neutral-100 p-8 rounded-xl">
                <dt className="text-base font-semibold leading-7 text-black">
                  <feature.icon className="h-8 w-8 text-notion-blue justify-center items-center mb-6 flex rounded-lg mx-auto" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
