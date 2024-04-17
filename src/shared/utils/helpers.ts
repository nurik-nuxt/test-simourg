function getProp<T>(obj: T, key: keyof T | string): any {
    return (obj as any)[key];
}
export {
    getProp
}