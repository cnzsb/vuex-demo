/**
 * Created by cnzsb on 2016/8/27.
 */
export const upTodo = ({dispatch}, todo) => {
    const fullTime = new Date()
    const time = (fullTime.getMonth() + 1) + '-' + fullTime.getDate() + ' ' + fullTime.getHours() + ':' + (fullTime.getMinutes() < 10 ? '0' + fullTime.getMinutes() : fullTime.getMinutes())
    const data = {
        time,
        todo,
        done: false
    }
    dispatch('UPTODO', data)
}
