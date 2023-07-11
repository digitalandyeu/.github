import socialsDataRaw from './src/data/socials'
import Team from './src/data/team'
import Contacts from './src/data/contacts'
import { LocalBusinessJsonLd } from 'next-seo'
// import imgAvaAndrii from './'
// import imgAvaPhilipp from './profile/static/img/team/ava_philipp.jpeg'

export const organisation = {
	user: 'digitalandyeu',
	title: 'DigitalAndy.eu - Web Development, Design & Marketing',
	description: 'We are independent digital artists collaboration, united by freaky love for web, technologies, design, and marketing.',
	maintainedSinceYear: '2019',
	list: {
		title: 'We do',
		items: ['Websites', 'Brands', 'Advertisements', 'IT support for Online Sales', 'Other small digital solutions for modern business needs'],
	},
	links: {
		title: false, items: [{
			title: 'Figma starter',
			href: 'https://figma.com/file/0AdHJVIm34eSJ0eRissQfe/Starter-%3A-Web?node-id=1%3A12&t=2H9vpif7XKQGlwfp-1',
		}, {
			title: 'Public data',
			href: './profile/data/',
		}, {
			title: 'Documents folder',
			href: './profile/docs/',
		}],
	},
}

export namespace JsonLd {
	export const websiteJsonLdGenerator = (org : typeof organisation = organisation) => {
		return LocalBusinessJsonLd({
			action: undefined,
			address: undefined,
			areaServed: [],
			dataArray: [],
			geo: undefined,
			images: [],
			makesOffer: [],
			openingHours: undefined,
			review: [],
			scriptId: '',
			servesCuisine: undefined,
			useAppDir: false,
			id: org.user,
			type: 'LocalBusiness',
			name: org.title,
			url: `https://${org.user}.github.io`,
			description: org.description,
			sameAs: [],
			telephone: '+380 63 000 00 00',
			rating: 5,
			reviewCount: 1,
			priceRange: '$$$'
		})
	}
}

export const socials = socialsDataRaw

export namespace Finder {
	export const linkByID = (searchID: string, data: typeof contacts = contacts) => data.find(({ id }) => id === searchID)
}

export const referrals = [{
	id: 'warp', href: 'https://app.warp.dev/referral/7DEWJ9',
}, {
	id: 'setapp', href: 'https://go.setapp.com/invite/7DEWJ9',
}, {
	id: 'hostinger', href: 'https://hostinger.com.ua?REFERRALCODE=1ANDRII78',
}, {
	id: 'digitalOcean', href: 'https://m.do.co/c/1a9b1b1b5b5d',
}]

export const reviewsSources = [{
	id: 'Google', href: 'https://g.page/r/CZpjtequdbiXEB0/review',
}, {
	id: 'Facebook', href: 'https://www.facebook.com/digitalandy.eu/reviews',
}, {
	id: 'LinkedIn', href: 'https://www.linkedin.com/company/digitalandy-eu',
}, {
	id: 'Vkontakte', lang: 'jsonld', href: 'https://vk.com/topic-116183169_35088484',
}]

export const reviews = reviewsSources
export const labels = {
	support_ua: true, gitpod: true,
}

export const map = [{
	id: 'github', keys: ['org', 'labels'],
}]

//export const socials = new DataSocials().data

export const resourcesTeam = {
	avatars: {
		'andrii': 'imgAvaAndrii',
		'philipp': 'imgAvaPhilipp',
	},
}

export const resources = {
	team: resourcesTeam,
}

export default {
	map, labels, contacts, referrals, socials, organisation, resources
}