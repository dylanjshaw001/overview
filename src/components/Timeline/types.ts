export type Event = {
  type: 'event' | 'marker', 
  id: string
  mileStone: 'school' | 'work',
  content: string
}

export type Marker = {
  type: 'event' | 'marker', 
  id: string
  mileStone: 'school' | 'work',
  dateRange?: string,
  content: string
}

export type EventOrMarker = Event | Marker;


export type TimelineMarker = {
  e: Marker, 
  bva: boolean,
  scroll: {
    brands: ()=>void,
    player: ()=>void
  }
}

export type TimelineEvent = {
  direction: string,
  e: Event,
  indByType: number,
  bva: boolean,
  scroll: {
    brands: ()=>void,
    player: ()=>void
  }
}