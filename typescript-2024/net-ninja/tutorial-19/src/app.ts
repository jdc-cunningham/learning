// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK, // index eg. 0
  data: { title: 'name of the wind' }
}
