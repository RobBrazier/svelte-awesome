/// <reference types="@sveltejs/kit" />

interface IconPath {
    id?: string
    d: string
    style?: string
    stroke?: string
}

interface IconPolygon {
    points: string,
    style?: string
}

interface IconData {
    width: number
    height: number
    paths?: IconPath[]
    polygons?: IconPolygon[]
    raw?: string
}