# Typescript Todos

## yarn start

<br/>

---

<br/>

## 투두리스트 리덕스 모듈 만들기

### src/modules/todos.ts

1. 액션 type/ 액션 생성함수/ 액션의 타입스크립트 타입 선언
2. 상태를 위한 타입 및 초기 상태 선언
3. 리듀서 구현하기

<br/>

### src/modules/index.ts

1. 루트 리듀서에 등록하기

<br/>

---

<br/>

## 투두리스트 컴포넌트 준비하기

### src/components/TodoInsert.tsx

### src/components/TodoItem.tsx

### src/components/TodoItem.css

### src/components/TodoList.tsx

<br/>

---

<br/>

## 컴포넌트 렌더링

### src/App.tsx

<br/>

## 커스텀 Hook 작성해서 기능 구현

### UseTodos

- src/hooks/useTodos.ts
- src/components/TodoList.tsx

### useAddTodo

- src/hooks/useAddTodo.tsx

### TodoInsert에서 Hook 사용

- src/components/TodoInsert.tsx

### useTodoActions

- src/hooks/useTodoActions/tsx

### TodoItem에서 Hook 사용

- src/components/TodoItem.tsx

<br/>

---

<br/>

# typesaft-actions로 리덕스 모듈 리팩토링 하기

```
yarn add typesafe-actions
```

## counter.ts 리팩토링

- src/modules/counter.ts
  1. 필요한 함수/ 타입 import
  2. 액션 type 선언할 때 as count 지우기
  3. createStandardAction으로 액션 생성 함수 만들기
  4. 액션의 객체 타입 만들기
  5. createReducer로 리듀서 만들기

<br/>

## Counter 컴포넌트 렌더

- src/App/tsx

<br/>

## Counter 리듀서를 메서드 체이닝 방식을 통해 구현하기

- src/modules/counter.ts

<br/>

## todos 리덕스 모듈 리팩토링라기

- src/modules/todos.ts
  1. 상단에 필요한 함수와 타입 import하기
  2. 액션의 타입 선언, 액션 생성함수 만들기, 액션 객체 타입 준비
  3. 리듀서 createReducer로 구현하기

<br/>

## TodoInsert / TodoList 렌더

- src/App.tsx

<br/>

## 리덕스 모듈 여러 파일로 분해하기

- src/modules/todos/actions.ts
- src/modules/todos/types.ts
- src/modules/todos/reducer.ts
- src/modules/todos/index.ts
