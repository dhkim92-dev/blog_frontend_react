import { Event } from "./Event"
import { Publisher, Subscriber } from "./pubsub"

class EventQueue implements Publisher {

    private subscribers = new Map<string, Array<Subscriber>>()
    
    unsubscribe(event: Event, subscriber: Subscriber) {
        const subs = this.subscribers.get(event.name) || [];
        
        for(let i = 0 ; i < subs.length ; i++) {
            if(subs[i] === subscriber) {
                subs.splice(i, 1);
            }
            i--;
        }

        this.subscribers.set(event.name, subs);
    }

    subscribe(event: Event, subscriber: Subscriber) {
        const subs = this.subscribers.get(event.name) || [];
        subs.push(subscriber);
        this.subscribers.set(event.name, subs);
    }

    notify(event: Event, data: any) {
        const subs = this.subscribers.get(event.name) || [];
    
        if(subs.length === 0) return;
        
        subs.forEach((v, i, arr) => {
            arr[i].update(event, data);
        })
    }
}

const defaultEventManager = new EventQueue()

export type {EventQueue}

export default defaultEventManager

