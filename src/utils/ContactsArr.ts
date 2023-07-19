type Contacts = {
    id: number
    title: string
    location: string
    victoria: string
    country: string
    check: string
    image: string
}
const ContactsArr: Contacts[] = [
    {
        id: 1,
        title: 'Office Sydney',
        location: 'Level 15,2 Elizabeth',
        victoria: 'Victoria 4883',
        country: 'Australia',
        check: 'Check us on map',
        image: '/images/OfficeSydney.webp'
    },
    {
        id: 2,
        title: 'Office London',
        location: 'Level 15,2 Elizabeth',
        victoria: 'Victoria 4883',
        country: 'England',
        check: 'Check us on map',
        image: '/images/OfficeLondon.webp'
    },
  
]
export const getBlogsObject = (array: Contacts[]) =>
    array.reduce(
        (object, Contacts) => ({
            ...object,
            [Contacts.id]: Contacts,
        }),
        {}
    )

export default ContactsArr