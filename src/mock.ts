import {IMailbox, IUser} from '@types'
import {defaultMailboxGroups} from '@ui/Navbar/Navbar.props'

export const user1: IUser = {
    id: 'c8725c45-831b-423f-a281-04b40112612f',
    name: 'Brian Hubbard',
    email: 'test1@mail.com',
    mailbox: '8e59156b-e0d7-40d8-b3fb-18e94f9e16bd'
}

export const user2: IUser = {
    id: 'd4600bd6-e3b2-4707-bfad-186894e59f2c',
    name: 'Mariana Lara',
    email: 'test2@mail.com',
    mailbox: '0d472b22-0c68-4ac0-a5ea-2f2d4190ce8c'
}

export const user3: IUser = {
    id: '657a9fe8-2a89-4d7a-ac22-8e1475e894f0',
    name: 'Beverly Fletcher',
    email: 'test3@mail.com',
    mailbox: '893c4942-c506-418c-8be3-73159570c2c8'
}

export const user4: IUser = {
    id: '247a2d5b-7cef-43f2-92a5-592acb4bc25f',
    name: 'Lilly-Grace Whitehead',
    email: 'test4@mail.com',
    mailbox: 'a915f209-4c4a-40e0-acac-3074c4854e74'
}

export const user5: IUser = {
    id: 'd1846bdc-c43f-4db6-8b57-115b16d6e396',
    name: 'Alma Bowman',
    email: 'test5@mail.com',
    mailbox: '8aae62e8-b619-4ad5-8d23-44a3a2be1317'
}

export const mailBox: IMailbox = {
    id: '8e59156b-e0d7-40d8-b3fb-18e94f9e16bd',
    userId: 'c8725c45-831b-423f-a281-04b40112612f',
    boxGroups: [
        {
            id: defaultMailboxGroups.Incoming,
            type: 'default',
            title: 'Входящие'
        },
        {
            id: defaultMailboxGroups.Sent,
            type: 'default',
            title: 'Отправленные'
        },
        {
            id: defaultMailboxGroups.Drafts,
            type: 'default',
            title: 'Черновики'
        },
        {
            id: defaultMailboxGroups.Deleted,
            type: 'default',
            title: 'Удаленные'
        },
        {
            id: defaultMailboxGroups.Spam,
            type: 'default',
            title: 'Спам'
        }
    ],
    letters: [
        // Отправленные
        {
            id: 'c2bccb35-9502-42bc-8c23-d1f33f3f5b57',
            from: user1,
            to: user3,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, obcaecati.',
            theme: 'Car park',
            date: 1650195414723
        },
        {
            id: '4ac63d8a-3b4f-4655-a56a-229de6c5bf99',
            from: user1,
            to: user3,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos exercitationem fuga inventore, magnam nobis.',
            theme: 'Opera',
            date: 1650192919723
        },
        {
            id: '8b6c0323-75de-4542-8935-ea987ef570ba',
            from: user1,
            to: user4,
            visit: false,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet.',
            theme: 'Greetings',
            date: 1650198994723
        },
        {
            id: 'b4ceb5d0-eda2-461a-b112-3d3acd7c2a70',
            from: user1,
            to: user5,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus laborum nulla numquam provident. Animi beatae cupiditate debitis dolorum et, excepturi fuga laboriosam laborum magni optio qui quisquam sint tempore?',
            theme: 'To repeat',
            date: 1650195923723
        },
        {
            id: '6f6516cf-bd89-4935-aa08-ae8f3dcbbb8c',
            from: user1,
            to: user2,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequatur dolor et expedita laudantium nostrum perferendis possimus quos saepe.',
            theme: 'Dry-clean',
            date: 1650195611723
        },
        {
            id: '5cf6cf75-cab3-4179-a9f9-5f3a66728fab',
            from: user1,
            to: user5,
            visit: false,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum.',
            theme: 'Compound nouns',
            date: 1650195666723
        },
        {
            id: 'db146016-3813-4f0b-a5cd-6a303bd692b6',
            from: user1,
            to: user2,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit.',
            theme: 'Compound adjectives',
            date: 1650195304723
        },
        {
            id: '9fd5c328-05f8-4805-884b-ea84b2358190',
            from: user1,
            to: user4,
            visit: true,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur.',
            theme: 'Compound verbs',
            date: 1650121919723
        },
        {
            id: 'd7abe722-daae-408d-a1a1-7a5830554266',
            from: user1,
            to: user4,
            visit: false,
            group: defaultMailboxGroups.Sent,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quae, quidem! Cupiditate dolorem placeat qui ratione saepe.',
            theme: 'Writing compound words',
            date: 16501954567923
        },
        // Полученные
        {
            id: 'c2bccb35-9502-42bc-8c23-d1f33f3f5b57',
            from: user3,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, obcaecati.',
            theme: 'A North Germanic language',
            date: 1650195913532
        },
        {
            id: '4ac63d8a-3b4f-4655-a56a-229de6c5bf99',
            from: user2,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos exercitationem fuga inventore, magnam nobis.',
            theme: 'After which considerable',
            date: 1650195264723
        },
        {
            id: '8b6c0323-75de-4542-8935-ea987ef570ba',
            from: user3,
            to: user1,
            visit: false,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet.',
            theme: 'There is much variability',
            date: 1650110094723
        },
        {
            id: 'b4ceb5d0-eda2-461a-b112-3d3acd7c2a70',
            from: user5,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus laborum nulla numquam provident. Animi beatae cupiditate debitis dolorum et, excepturi fuga laboriosam laborum magni optio qui quisquam sint tempore?',
            theme: 'In different countries',
            date: 1650195924423
        },
        {
            id: '6f6516cf-bd89-4935-aa08-ae8f3dcbbb8c',
            from: user3,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequatur dolor et expedita laudantium nostrum perferendis possimus quos saepe.',
            theme: 'Modern English relies more on auxiliary verbs',
            date: 1650192777723
        },
        {
            id: '5cf6cf75-cab3-4179-a9f9-5f3a66728fab',
            from: user4,
            to: user1,
            visit: false,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum.',
            theme: 'English is a West Germanic language',
            date: 1650195300723
        },
        {
            id: 'db146016-3813-4f0b-a5cd-6a303bd692b6',
            from: user4,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit.',
            theme: 'Emphasis in Compound',
            date: 1650195910053
        },
        {
            id: '9fd5c328-05f8-4805-884b-ea84b2358190',
            from: user2,
            to: user1,
            visit: true,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur.',
            theme: 'Write the words separately',
            date: 1650196500723
        },
        {
            id: 'd7abe722-daae-408d-a1a1-7a5830554266',
            from: user5,
            to: user1,
            visit: false,
            group: defaultMailboxGroups.Incoming,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quae, quidem! Cupiditate dolorem placeat qui ratione saepe.',
            theme: 'When it comes',
            date: 1650195935023
        },
    ]
}