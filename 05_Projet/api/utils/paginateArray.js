/**
 * Permet de faire un système de pagination sur un array
 * @param {Array} array 
 * @param {{ page?: number, itemsPerPage?: number }} 
 */
function paginateArray(array, { page, itemsPerPage }) {
    const offset     = (page - 1) * itemsPerPage;
    const rows       = array.slice(offset).slice(0, itemsPerPage);
    const totalItems = array.length;
    const hasMore    = (page * itemsPerPage) < totalItems;
    return { totalItems, hasMore, rows };
}

module.exports = paginateArray;