![image](https://github.com/oiosu/GraphQL/assets/99783474/3912a759-1ed8-4f89-825f-d1ff3b53d582)
## ◾ **A query language for your API**
* GraphQL은 API용 쿼리 언어이다. 
* GraphQL은 API의 데이터에 대한 이해하기 쉬운 설명을 제공하고, 클라이언트가 필요한 것을 정확하게 요청할 수 있는 능력을 제공한다. 

## ◾ GraphQL 단계 
(1) **Describe your data (데이터를 묘사하고)**
```javascript
type Project {
    name: String
    tagline: String
    contributors: [User]
}
```

(2) **Ask for what you want (클라이언트에서 필요한 데이터를 요청하고)**
```javascript
{
    project {name: "GraphQL"} {
        tagline
    }
}
```

(3) **Get predictable results (서버에서 예측한 데이터를 받아온다)**
```javascript
{
    "project" : {
        "tagline" : "A query language fo APIs"
    }
}
```

---

## ◾ GraphQL를 사용하는 이유 
* 모든 기술이 그전에 사용하던 기술을 보완하기 위해서 나오듯 GraphQL도 REST에서 부족한 점을 보완하기 위해 나왔다.
* GraphQL이 REST보다 전체적으로 더 낫다 라는 말이 아닌 서로가 각기 장단점이 있어서 상황에 맞게 더 나은 것을 사용하면 된다. 


## ◾ GraphQL의 장점 
* 프런트엔드 개발자는 백엔드 개발자가 REST API 개발을 마칠 때까지 기다리지 않아도 된다. 
* Overfetching과 Underfetching을 막아준다. 
* REST를 이용할 때 필요한 데이터를 만들기 위해서 여러 번 요청을 보내야 할 때 GraphQL은 한 번의 요청으로 데이터를 가져올 수 있다. 

## ◾ GraphQL server 생성 
```bash
npm install express express-graphql graphql --save
```
1. `express-graphql` 폴더 생성 
2. `npm init -y` 명령어를 통해 `package.json` 파일 생성
3. `npm install express express-graphql graphql`  명령어를 통해 설치

## ◾ Graphql-Tools
> Graphql 소스 코드가 한 파일에 있으면 복잡해지고 관리하기 힘들어 진다. 그래서 관련된 부분끼리 모듈화 해줄 때 사용하는 게 Graphql-tools 이다. <br>
> 여기서 graphql-tools가 하는 일은 graphql 파일들을분리해놓으면, 다시 하나로 모아 합쳐주는 도구이다. 

* 패키지 설치하기 
```bash
npm install @graphql-tools/schema
```

---

## ◾ Resolver
> A resolver is a function that's resposible for populating the data for a single field in your schema.
> It can populate that data in any way you define, sush as by fetching data from a back-end database or a third-party API.
> Resolver는 스키마의 단일 필드에 대한 **데이터를 채우는 역할을 하는 함수**이다. 
> 벡앤드 데이터베이스 또는 타사 API에서 데이터를 가져오는 것과 같이 **원하는 대로 정의한 방식으로 데이터를 채울 수 있다.** 

* resolver 함수 생성하기 
```javascript
const schema = makeExecutableSchema({
    typeDefs: loadedTypes,
    resolvers: {
        Query: {
            post: (parent, args, context, info) =>{
                console.log('parent', parent);
                console.log('args', args);
                console.log('context', context);
                console.log('info', info);
                return parent.posts;
            },
            comments: (parent) => {
                return parent.comments;
            }
        }
    }
});
```

#### 🔻parent : 이 필드의 부모(즉, resolver 체인의 이전 resolver)에 대한 resolver의 반환 값이다.
#### 🔻args : 이 필드에 제공된 모든 GraphQL인수를 포함하는 객체이다. `args {}`
#### 🔻context : 특정 작업에 대해 실행 중인 모든 resolver 간에 공유되는 object이다. 인증 정보, 데이터에서 추적할 기타 항목을 포함하여 작업별 상태를 공유하는데 사용한다. 
#### 🔻info : 필드 이름, 루트에서 필드까지의 경로 등을 포함하여 작업의 실행 상테에 대한 정보를 포함한다. 

* resolver 함수에서 비동기 처리할 수 있게 만들기 
```javascript
Query: {
    posts: async (parent) => {
        const product = await Promise.resolve(parent.posts);
        return product;
    },
    comments: (parent) => {
        return parent.comments;
    }
}
```
#### [위 문법에 대한 설명](https://github.com/oiosu/GraphQL/blob/master/08.%20Resolver.md) 
`await는 아주 멋진 녀석이죠!!!!`

---

### [◾ Resolvers 모듈화하기](https://github.com/oiosu/GraphQL/blob/master/09.%20Resolvers%20%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0.md)
(1) resolvers 파일 생성하기 <br>
(2) resolver 파일들 load 하기 <br>
(3) 각 파일에 resolver 함수 가져오기 <br>
(4) 로직을 model 함수를 만들어서 처리하기 <br>
(5) 그 이후 default value 지워주기 <br>

---

### [◾ 필터링 기능 추가하기 ](https://github.com/oiosu/GraphQL/blob/master/10.%20%ED%95%84%ED%84%B0%EB%A7%81%20%EA%B8%B0%EB%8A%A5%20%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.md)
### [◾ ID 데이터 가져오기 ](https://github.com/oiosu/GraphQL/blob/master/11.%20ID%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0.md)
### [◾ Mutation](https://github.com/oiosu/GraphQL/blob/master/12.%20Mutaition.md)
* mutate : 변화시키다, 돌연변이시키다.
```javascript
mutation {
    addNewPost(
    	id: "post3"
        title: "It is a third post"
        description: "It is a third post description"
    ) {
        title
        description
    }
}
```
### [◾Comment 생성하기](https://github.com/oiosu/GraphQL/blob/master/13.%20Comment%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)
### [◾ Apollo ?](https://github.com/oiosu/GraphQL/blob/master/14.%20Apollo%EB%9E%80%20%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94.md)
> Apollo 는 GraphQL 을 CLIENT와 SERVER모두에서 편하게 사용할 수 있게 도와주는 라이브러리이다.
```javascript
import { gql, useQuery } from '@apollo/client';

const Username = () => {
    const { loading, error, data } = useQuery(gql`
    {
    	me {
    		username
    	}
    }
    `);
    
    if (loading) return <text>Loading..</text>;
    if (error) return (
    	<text>Error; $(error.message)</text>
    );
    if (!data || !data.user) return (
    	<text>Could not find user : (</text>
    );
    
    return (
    		<text>Your usernmae: {data.me.username}</text>
    	);
    )
    
```
* **Apollo Server?**
> Apollo 클라이언트를 포함한 모든 GraphQL 클라이언트와 호환되는 사양 준수의 오픈 소스 GraphQL 서버이다.


### [◾ Apollo Server V3](https://github.com/oiosu/GraphQL/blob/master/15.%20Apollo%20Server%20V3.md)
### [◾ Apollo Server V4](https://github.com/oiosu/GraphQL/blob/master/16.%20Apollo%20Server%204.md)


