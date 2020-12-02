import Person from "./Person.js"
import Relationship from "./Relationship.js"

export default class Group {
    people
    relationships
    constructor(name){
        this.name = name
        this.people = []
        this.relationships = []
    }

    addPerson(person){
        if(person instanceof Person){
            this.people.push(person)
        }
    }

    addRelationship(p1,p2){
        if(p1 instanceof Person && p2 instanceof Person){
            let foundRelationship = this.relationships.find((relationship) => {
                return (relationship.a == p1 && relationship.b) ||  (relationship.b == p1 && relationship.a == p2)
            })

            if(foundRelationship == null){
                this.relationships.push(new Relationship(p1,p2))
            }
        }
    }
    findFriends(person){
        if(person instanceof Person){
            let friends = []

            for(let relationship of this.relationships){
                if(relationship.a == person){
                    friends.push(relationship.b)
                } else if(relationship.b == person){
                    friends.push(relationship.a)
                }
            }

            return []
        }
    }
}