import {Repository} from "typeorm";

export type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
    findOneBy: jest.fn(entity => entity),
    save: jest.fn( entity => entity),
    update: jest.fn( entity => entity),
    find: jest.fn( entity => entity)
}));