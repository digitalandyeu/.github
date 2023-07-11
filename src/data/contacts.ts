export const contacts = [
	{
		id: 'email',
		href: 'mailto:hi@digitalandy.eu',
	},
	{
		id: 'telegram',
		href: 'https://t.me/andriilive',
	},
	{
		id: 'messenger',
		href: 'https://m.me/digitalandy.eu',
	},
	{
		id: 'whatsapp',
		href: 'https://wa.me/message/SVBNVNLZ2W4FJ1',
	},
	{
		id: 'instagram',
		href: 'https://instagram.com/digitalandy.eu',
	},
]

namespace Contacts {
	export const items = contacts
	export const ids = contacts.map((contact) => contact.id)

	export type ContactId = (typeof ids)[number]
	export const getItem = (id: ContactId) => contacts.find((contact) => contact.id === id)
}

export default Contacts
