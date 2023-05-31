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

