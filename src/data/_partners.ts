export const partners = [
	{
		id: 'mediaunit',
		title: 'MediaUnit',
		description: 'Jsme internetová agentura, se kterou dosáhnete úspěchu v online světě',
		actions: [
			{
				id: 'web',
				href: 'https://mediaunit.cz',
			},
		],
	},
]

export const partnersIdsCollector = partners.map((partner) => partner.id)
export type PartnerId = typeof partnersIdsCollector[number]
export const partnerByIDGetter = (id: PartnerId) => partners.find((partner) => partner.id === id)

export default {
	partners,
	partnersIdsCollector,
	partnerByIDGetter
}