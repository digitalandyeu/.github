import { resourcesTeam } from '../../resources'
import { SocialProfileJsonLd } from 'next-seo'
import { Finder } from '../../data'

export const teamMembersData = [
	{
		id: 'andrii',
		avatar: resourcesTeam.avatars.andrii,
		title: 'Andrii Ivashchuk',
		description: 'Development & Digital services',
		actions: [
			{
				id: 'github',
				href: 'https://github.com/andriilive',
			},
			{
				id: 'whatsapp',
				href: Finder.linkByID('whatsapp').href,
			},
		],
		socials: [
			{
				id: 'linkedin',
				href: 'https://www.linkedin.com/in/andriilive',
			},
		],
	},
	{
		id: 'philipp',
		avatar: resourcesTeam.avatars.philipp,
		title: 'Philipp Egorov',
		description: 'Design & Beauties',
		actions: [
			{
				id: 'linkedin',
				href: 'https://www.linkedin.com/in/philavr',
			},
			{
				id: 'telegram',
				href: 'https://t.me/philavr',
			},
		],
	},
	{
		id: 'tristan',
		avatar: resourcesTeam.avatars.philipp,
		title: 'Igor Tristan',
		description: 'Marketing & Sales',
		actions: [
			{
				id: 'telegram',
				href: 'https://t.me/TrystanIM',
			},
		],
	},
]

namespace Team {
	export const members = teamMembersData
	export const membersIDs = teamMembersData.map((teamMember) => teamMember.id)

	export type TeamMemberId = (typeof membersIDs)[number]
	export const getMember = (id: TeamMemberId) => teamMembersData.find((teamMember) => teamMember.id === id)
	export const jsonLdSocialProfile = (idSearched: TeamMemberId) => {
		let { id, title, socials, actions, ...data } = getMember(idSearched)
		return SocialProfileJsonLd({
			name: title,
			url: `/team/${id}`,
			type: 'Person',
			scriptId: `team-member-${id}`,
			sameAs: [...socials, ...actions].map(({ href }) => href),
			dataArray: [],
			useAppDir: false,
			...data,
		})
	}
}

export default Team
