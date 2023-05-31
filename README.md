# 🔻GraphQL
> **A query language for your API**

> GraphQL은 API용 쿼리 언어이다. <br>
> GraphQL은 API의 데이터에 대한 이해하기 쉬운 설명을 제공하고, <br>
> 클라이언트가 필요한 것을 정확하게 요청할 수 있는 능력을 제공한다. 



## 📌 GraphQL 단계 
1. Describe your data (데이터를 묘사하고)
```javascript
type Project {
    name: String
    tagline: String
    contributors: [User]
}
```
2. Ask for what you want (클라이언트에서 필요한 데이터를 요청하고 )
```javascript
{
    project {name: "GraphQL"} {
        tagline
    }
}
```
3. Get predictable results (서버에서 예측한 데이터를 받아옵니다.)
```javascript
{
    "project" : {
        "tagline" : "A query language fo APIs"
    }
}
```

---

### 🟣 이미 REST를 잘 이용하고 있는데 왜 GraphQL을 사용하나요? 
* 모든 기술이 그전에 사용하던 기술을 보완하기 위해서 나오듯 GraphQL도 REST에서 부족한 점을 보완하기 위해 나왔습니다. 
* GraphQL이 REST보다 전체적으로 더 낫다 라는 말이 아닌 서로가 각기 장단점이 있어서 상황에 맞게 더 나은 것을 사용하면 됩니다. 


### 🟣 GraphQL 장점
##### 프런트엔드 개발자는 백엔드 개발자가 REST API 개발을 마칠 때까지 기다리지 않아도 됩니다. 
> 주로 개발 과정은 백엔드 개발자가 REST API 개발 마치고 그 후에 프런트엔드 개발자가 그 API에 호출해서 받아온 데이터를 이용해서 화면에 데이터를 보여줍니다. <br>
> 하지만 GraphQL을 사용하면 프런트엔드 개발자와 백엔드 개발자가 전체 개발 프로세스를 병렬로 작업할 수 있습니다. 


* Overfetching과 Underfetching을 막아줍니다. 
* REST를 이용할 때 필요한 데이터를 만들기 위해서 여러 번 요청을 보내야 할 때 GraphQL은 한 번의 요청으로 데이터를 가져올 수 있다.

