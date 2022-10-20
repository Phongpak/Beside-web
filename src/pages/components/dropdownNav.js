import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='text-[#D9D9D9] hover:text-[#506369] font-bold  lg:text-xl rounded-xl  flex gap-2  text-sm hover:bg-white p-2 '>
					<i class='fa-regular fa-circle-user'></i>
					<i class='fa-solid fa-chevron-down'></i>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<a
									href='#'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Profile
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href='#'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Account settings
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href='#'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Support
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									href='#'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									License
								</Link>
							)}
						</Menu.Item>
						<form method='POST' action='#'>
							<Menu.Item>
								{({ active }) => (
									<button
										type='submit'
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block w-full px-4 py-2 text-left text-sm'
										)}
									>
										Sign out
									</button>
								)}
							</Menu.Item>
						</form>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
