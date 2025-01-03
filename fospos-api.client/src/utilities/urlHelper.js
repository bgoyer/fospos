export const apiResolver = (url) => {
    const root = import.meta.env.DEV ? 'https://localhost:7126/' : '/';
    return `${root}${url}`;
}