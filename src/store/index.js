import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: [{
        title: 'Керемет Банк',
        description: 'POS-терминалы ОАО «Керемет Банк», Информация о платежах',
        img: 'bank.svg',
        id: 1,
        active: false
      },
      {
        title: 'Транспорт и вождение',
        description: 'Информация о налогах на технические средства',
        img: 'car.svg',
        id: 2,
        active: false
      },
      {
        title: 'Паспорта и удостовирение',
        description: 'Наличие документа в бюро находок, Проверка готовности паспорт',
        img: 'id-card.svg',
        id: 3,
        active: false
      },
      {
        title: 'Работа, пенсия, налоги',
        description: 'Справка по безработице, Проверка налоговой задолженности',
        img: 'wallet.svg',
        id: 4,
        active: false
      },
      {
        title: 'Медицина и страхование',
        description: 'Загрузка данных по полисам ОМС, Проверка задолженности по',
        img: 'health-doc.svg',
        id: 5,
        active: false
      },
      {
        title: 'Недвижимость имущество',
        description: 'История прав на недвижимое имущество, Выписка из гос',
        img: 'inhouse.svg',
        id: 6,
        active: false
      },
      {
        title: 'Образование',
        description: 'Проверка диплома о высшем образовании, Проверка аттест',
        img: 'education.svg',
        id: 7,
        active: false
      },
      {
        title: 'Семья и дети',
        description: 'Сведения о семейном статусе, Проверка статуса заявления',
        img: 'family-3.svg',
        id: 8,
        active: false
      },
    ],
    posts: [],
    todoList: []
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setVisited(state, id) {
      console.log(state.services[state.services.findIndex(el => el.id === id)], id)
      state.services[state.services.findIndex(el => el.id === parseInt(id))].active = true

    },
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts
    },
    SET_TASK_TO_STATE: (state, task) => {
      task.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      console.log(task, 'task');
      state.todoList.push(task)
    },
    DELETE_TASK_IN_STATE: (state, id) =>  {
      const index = state.todoList.findIndex(task => task.id === id)
        state.todoList.splice(index, 1)

  }
},
  actions: {
    FETCH_POSTS(ctx, limit) {
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then(response => response.json())
        .then(response => {
          ctx.commit('SET_POSTS_TO_STATE', response)
        })
        .catch(error => {
          console.log(error)
        })

    },
    CREATE_TASK(ctx, task) {
      console.log(task, 'task')
      ctx.commit('SET_TASK_TO_STATE', task)
    },
    DELETE_TASK(ctx, id) {
      ctx.commit('DELETE_TASK_IN_STATE', id)
      console.log(id, 'id task')
    }
  },
  getters: {
    getCard: state => id => {
      console.log(state.services.find(el => el.id === parseInt(id)))
      return state.services.find(el => el.id === parseInt(id))
    }
  },
})