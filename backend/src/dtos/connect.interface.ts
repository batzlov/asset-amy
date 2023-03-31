/* 
    this interface is used so prisma is able to connect the tables, currently it is only used 
    for the dtos so it is stored in the dtos folder 
*/
export interface Connect {
    connect: {
        id: number;
    };
}
