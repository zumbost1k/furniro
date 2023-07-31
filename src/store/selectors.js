import { createSelector } from 'reselect'

const selectProducts = state => state.product.selectedProducts
const selectProductList = state => state.productList.products;
const selectcomparedProduct = state => state.comparedProduct.CompareProd;

export const selectProductById = createSelector([selectProductList, selectProducts],
    (allProducts, productId) => {
        return allProducts.filter(product => {
            const idToFind = productId.find(idObj => idObj.id === product.id);
            return idToFind !== undefined;
        }).map(product => {
            const idToFind = productId.find(idObj => idObj.id === product.id);
            return {
                ...product,
                quantity: idToFind.quantity
            };
        });

    }
)


export const selectTotalCost = createSelector([selectProductById],
    (allProdById) => {
        return allProdById.reduce((accumulator, product) => {
            const costString = product.cost;
            const costWithoutDots = costString.replace(/\./g, '');
            const cost = parseInt(costWithoutDots) * parseInt(product.quantity);
            return accumulator + cost;
        }, 0).toLocaleString('en-US');
    }
)


export const selectProductByCompared = createSelector([selectProductList, selectcomparedProduct],
    (allProducts, productId) => {
        const prods =  allProducts.filter(product => productId.includes(product.id))
        return prods
    }
)