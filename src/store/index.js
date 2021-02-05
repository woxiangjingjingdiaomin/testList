import Vue from 'vue'   
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)
// 创建对象
const store = new Vuex.Store({
        state:{
            counter:1000,
            students:[
                {
                    id:100,name:'why',age:19,
                },{
                    id:101,name:'jwk',age:20,
                },
                {
                    id:1002,name:'qwe',age:21,
                }
            ]
        },

        mutations:{
            increment(state) {
                state.counter ++;
            },
            decrement(state) {
                state.counter --;
            }
        },
        actions:{},
        getters:{
            PowerCounter(state) {
                return  state.counter * state.counter
            },
            huq20(state){
                return state.students.filter(r => r.age >= 20)
            },
            huq20length(state,getters){
                return getters.huq20.length;
            },
            moreAa(state){
                return function (age) {
                    return state.students.filter(s =>  s.age > age)
                  }
            }
        },
        modules:{}
})

export default store