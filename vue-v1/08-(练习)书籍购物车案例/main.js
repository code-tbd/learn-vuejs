const app = new Vue({
  el: '#app',
  data: {
    haveBook: true,
    books: [{
        name: '算法导论',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        name: 'UNIX编程艺术',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        name: '编程珠玑',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        name: '代码大全',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    increment(item) {
      item.count++
    },
    decrement(index) {
      if (this.books[index].count > 1) {
        this.books[index].count--
      }
    },
    remove(index) {
      this.books.splice(index, 1)
      if (this.books.length == 0) {
        this.haveBook = false
      }
    }
  },
  computed: {
    totalPrice() {

      // 高阶函数：filter() 过滤
      // 高阶函数：map() 映射
      // 高阶函数：reduce( callbackfn( preValue, currentValue ), 初始值 ) 汇总
      return this.books.reduce((pre, book) => pre + book.price * book.count, 0)
    }
  },
  filters: {
    finalPrice(price) {
      return '¥' + price.toFixed(2)
    },
    finalName(name) {
      return '《' + name + '》'
    }
  }

})


