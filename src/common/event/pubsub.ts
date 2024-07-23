import { Event } from "./Event"

interface Subscriber {

    update(event: Event, data: any): void
}

interface Publisher {

    subscribe(event: Event, subscriber: Subscriber): void

    unsubscribe(event: Event, subscriber: Subscriber): void

    notify(event: Event, data: any): void
}

export type {Subscriber, Publisher}