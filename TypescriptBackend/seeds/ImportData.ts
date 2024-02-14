import {Knex} from "knex";
import {Camera} from "../src/models/Camera";


export async function seed(knex: Knex): Promise<void> {
    const cameras: Camera[] = [
        {
            id: 'e4c298b6-3159-4444-b111-86e53857a4bf',
            place: 'miestnost1',
            type: 'room',
            rooms: null
        },
        {
            id: '0b2c4b9a-2f98-4167-8754-0748fc7d1d62',
            place: 'miestnost2',
            type: 'room',
            rooms: null
        },
        {
            id: 'c8b9f62c-ee50-4b54-a118-9063809ab350',
            place: 'miestnost3',
            type: 'room',
            rooms: null
        },
        {
            id: 'c4e6a45f-1bf7-449b-a842-60cbcfc8a7c3',
            place: 'miestnost4',
            type: 'room',
            rooms: null
        },
        {
            id: '901734ef-f910-4f5b-bbef-7e6056be4b43',
            place: 'miestnost5',
            type: 'room',
            rooms: null
        },
        {
            id: 'a9693e7b-4315-44d5-b957-36e5c8c69c9f',
            place: 'miestnost6',
            type: 'room',
            rooms: null
        },
        {
            id: '7192ba8a-b619-4040-b9f2-04656ea9c5ac',
            place: 'miestnost7',
            type: 'room',
            rooms: null
        },
        {
            id: 'a013630b-3a9d-4137-8745-7631466ef686',
            place: 'miestnost8',
            type: 'room',
            rooms: null
        },
        {
            id: '22f85568-3b26-4816-a64e-13a021af1945',
            place: 'miestnost9',
            type: 'room',
            rooms: null
        },
        {
            id: 'c7488e7d-9082-40f8-bbc2-1930d184c711',
            place: 'miestnost10',
            type: 'room',
            rooms: null
        },
        {
            id: 'b8a4526f-6ca5-4e6a-b196-ef36dfa2b2a3',
            place: 'miestnost11',
            type: 'room',
            rooms: null
        },
        {
            id: '9bebd236-8150-4ec7-86bd-e426394afb07',
            place: 'miestnost12',
            type: 'room',
            rooms: null
        },
        {
            id: 'a38b2a15-5994-4d95-87c9-34cf791a5e0c',
            place: 'miestnost13',
            type: 'room',
            rooms: null
        },
        {
            id: 'b130c70b-1fcb-4292-a949-0780e399a182',
            place: 'miestnost14',
            type: 'room',
            rooms: null
        },
        {
            id: '42f6164d-94fc-43f0-a7be-4efb0072992c',
            place: 'miestnost15',
            type: 'room',
            rooms: null
        },
        {
            id: '3535919f-3e09-4eba-8208-3acdfe49892b',
            place: 'miestnost16',
            type: 'room',
            rooms: null
        },
        {
            id: '8077be73-6c1a-4b8c-98ad-4f526fd3b88e',
            place: 'miestnost17',
            type: 'room',
            rooms: null
        },
        {
            id: '2f6d5029-fb54-489a-8066-6ba30635e65f',
            place: 'miestnost18',
            type: 'roomoom',
            rooms: null
        },
        {
            id: '5b5568f1-f113-45db-b80b-50506468cebf',
            place: 'K1',
            type: 'corridor',
            rooms: [0, 1, 2, 3]
        },
        {
            id: 'e4bfab5d-e1c5-463c-b773-b4afb9d46b0c',
            place: 'K2',
            type: 'corridor',
            rooms: [4, 5, 6, 7, 8]
        },
        {
            id: '4a26138e-07f1-4104-baa6-52e64e48d383',
            place: 'K3',
            type: 'corridor',
            rooms: [18, 16, 17]
        },
        {
            id: '55f2ca8c-52a5-4a89-8740-81f6f1c13344',
            place: 'K4',
            type: 'corridor',
            rooms: [11, 12, 13]
        },
        {
            id: 'ca22b672-c6ed-40a0-b57f-6760bd15c851',
            place: 'K5',
            type: 'corridor',
            rooms: [15, 14]
        }
        ,
        {
            id: '36622cf3-2884-4cdf-9e28-3adee93933e4',
            place: 'K6',
            type: 'corridor',
            rooms: [9, 10]
        }
    ];

    await knex('cameras').insert(cameras);
}