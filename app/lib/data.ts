import { prisma } from '@/app/lib/prisma'

export async function getProducts() {

    try {
        const data = await prisma.products.findMany();

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products data.');
    }
}

export async function getProductsVersionById(query: number) {

    try {

        const data = await prisma.productsVersions.findMany({
            where: {
                productId: query,
            },
        })

        return data;

    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Versiones')
    }
}


export async function getProductsByCategory(query: number) {
    try {
        const data = await prisma.products.findMany({
            where: {
                categoryId: query,
            }
        })

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products')
    }
}


export async function getProductCategories() {
    try {
        const data = await prisma.productsCategories.findMany({
            where: {
                active: true
            }
        });
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Categories')
    }
}

export async function getDriverProducts() {
    try {
        const data = await prisma.productDrivers.findMany(
            {
                include: {
                    operatingSystems: {
                        select: {
                            name: true
                        }
                    },
                    productsCategories: {
                        select: {
                            name: true
                        }
                    },
                    products: {
                        select: {
                            model: true
                        }
                    },
                    driverTypes: {
                        select: {
                            name: true
                        }
                    },


                },
                where: {
                    active: true
                }
            }
        )

        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}
export async function getDriverProductsByIdProd(query : number) {
    try {
        const data = await prisma.productDrivers.findMany(
            {
                include: {
                    operatingSystems: { 
                        select: {
                            name: true
                        }
                    },
                    productsCategories: {
                        select: {
                            name: true
                        }
                    },
                    products: {
                        select: {
                            model: true
                        }
                    },
                    driverTypes: {
                        select: {
                            name: true
                        }
                    },


                },
                where: {
                    active: true,
                    prodId: query
                }
            }
        )
        // console.log(data)
        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}
export async function getTypeDriverByIdProdByIdOs(prodId : number, osId: number) {
    try {
        const data = await prisma.productDrivers.findMany(
            {
                include: {
                    operatingSystems: { 
                        select: {
                            name: true
                        }
                    },
                    productsCategories: {
                        select: {
                            name: true
                        }
                    },
                    products: {
                        select: {
                            model: true
                        }
                    },
                    driverTypes: {
                        select: {
                            name: true
                        }
                    },


                },
                where: {
                    active: true,
                    prodId,
                    operatingSystemsId : osId 

                }
            }
        )
        console.log(data)
        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}



