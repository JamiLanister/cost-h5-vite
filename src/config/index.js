const MODE = import.meta.env.MODE // 环境变量

export const baseUrl = MODE == 'development' ? '/api' : 'http://182.92.105.28:7009';