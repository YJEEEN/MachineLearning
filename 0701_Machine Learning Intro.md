# 0701_Machine Learning Intro



#### AI 설계 과정​

* 데이터 수집 

  : 웹(test, image, 동영상) / 정형 (DB)

* 데이터 전처리 (numpy, 차원 축소, 상관 분석)

  벡터 표기법 : (000, 000, 000, ...)
  차원(feature) : 커피/ 아이스크림/ 사탕  --> 단가와 벡터 연산이 가능하다.

  |      | 커피   | 아이스크림 | 사탕   | ...  | 단가   |
  | ---- | ---- | ----- | ---- | ---- | ---- |
  | 7/1  | 5    | 5     | 10   | ...  | 100  |
  | 7/2  | 3    | 5     | 2    | ...  | 50   |
  |      |      |       |      |      | 200  |



​	ex) 지각과 다양한 변수의 상관 관계

|      | 늦잠(X1) | 마음가짐(x2) | 혈액형(x3) | ...  | 지각(Y) |
| ---- | ------ | -------- | ------- | ---- | ----- |
| 7/1  | 1      | 1        | A       |      | 1     |
|      | 0      | 1        | AB      |      | 0     |
|      | ...    |          |         |      | ...   |

*상관 계수( -1 ~ 1 ) : 0에 가까울 수록 결과와 관계가 없고, -1(반비례), 1(비례)에 가까울 수록 관계가 크다.  

*공분산(co variable) : 



feature selecting modeling 과정 : Xm-n  --> Y (n:전체 feature 수, m: 관계없는 feature 수)

feature reduction modeling : Xn 차원에서 새로운 m개의 축(차원)을 만든다
​							ex) pca (주성분 분석 고유vector/ 고유value)

* 데이터 분석 (pandas )
  : Pattern을 찾아내는 과정 (pivot이 많이 쓰인다. )

-----------------------------------------------------------------------------------------------------------------------------Data 분석과정

* 머신 러닝
  : 어떻게 학습시키느냐에 따라 결과가 달라진다



​	1) 교사학습 : 문제와 답을 학습 시킨다

​	2) 비교사 학습 : 답을 알려주지 않는다. 정답을 찾는 것이 아닌 패턴, 특성 학습을 통해 발견하는 학습

​	3) 강화 학습 : Award와 Penalty



-----------------------------------------------------------------------------------------------------------------------------AI 과정



```python
# Python에 Array 형 변수는 없다 --> Numpy라는 패키지를 불러온다
# Numpy는 모든 원소 data가 같아야한다 / 원소의 개수 변경 X / numpy = 수치 해석용 패키지
# ndarray (n-dimesion(차원) 배열)를 지원 --> n차원을 활용한 선형 대수 계산을 하기 위함
# 단일 for문의 경우 O(n)의 시간 복잡도를 갖지만, numpy의 경우 벡터화 연산을 제공하여 복잡한 연산이 가능하다
# List의 경우 자료형이 달라도 상관없다

import numpy as np
arr = np.array([1,2,3]) # list를 array의 요소로 넣어주면 배열이 된다
print(type(arr))
ans = []
for i in arr: # arr에 저장된 배열에 요소를 추출해서 i에 담아라 --> 1,2,3이 차례로 들어감
    ans.append(i*2) #list에 요소를 추가하고 싶을 때, append를 사용
print(ans)

print(2*arr) # 배열에 대한 곱은 각 요소에 계산됨 --> 벡터화 연산

li = [1,2,3] # 리스트에 대한 곱은 리스트 자체에 계산
print(li*2)

a = np.array(([1,2]))
b = np.array([10,20])
print(3*a+b)

arr = np.array([1,2,3])
print(arr==2) #벡터연산이 되니까, 각 요소가 2와 같은지 확인함
print((arr<2) & (arr>0))

c = np.array([[1,2,3],[4,5,6]]) # 2*3array
print(len(c)) #행의 개수 출력
print(len(c[0])) #열의 개수 출력

#배열의 차원(ndim), 크기(shape)
a =np.array([1,2,3])
print(a.ndim)
print(a.shape)

a2 =np.array([[1,2,3],[4,5,6]])
print(a2.ndim)
print(a2.shape)

a3 = np.array([1,2,3,4,5])
print(a3[-1]) # index -1은 맨 뒤에 요소를 의미함

a4 = np.array([[1,2,3],[4,5,6]])
# a4를 참조하여 2를 출력하라
print(a4[0,1]) # print(a4[0][1]) 도 가능함

print(a4[1])
print(a4[-1])
print(a4[-1,-1]) # 뒤에 행 중에서 뒤의 요소 --> 6출력

# 5,6을 슬라이싱
print(a4[1, 1:])

# f(x) = w1*1 + w2*2 + ... + wn*n + b
a = np.zeros((5,2), dtype="i") # .함수 형태의 데이터는 float형이다.
print(a)

b = np.empty((5,2)) # 쓰레기 값이 들어간다
print(b)

print(np.arange(10,50,3)) # 50은 포함하지 않음
print(np.linspace(0,100,5)) # linear space(선형 구간/공간): 100을 포함하고, 5구간으로 바꿔준다
print(np.logspace(0.1,1,10)) # log space(로그 구간/공간)
# np.arange --> 특정한 규칙에 따라 가감되는 행렬을 만들어주는 함수
# arange는 ','없이 배열로 출력

print(a.T) # f(x) = wx +b일 때, transpose해야 할 경우가 있다.

b = np.array(12)
print(b)
#4행 3열로 변환하고 싶다면,
#c = b.reshape(4,3)
#c = b.reshape(4,-1) : 4행으로만 만들어라 12개 data면 열은 자동으로 3개가 완성됨
print(c)

# 1차원을 3차원 : reshape
# 다차원을 1차원 : ravel, flatten
print(c.flatten())
print(c.ravel())

x = np.arange(5)
print(x)
x = x.reshape(1,5)
print(x)
x = x.reshape(5,1)
print(x)

print(x[:, np.newaxis]) #차원을 증가시킬 때, newaxis라는 함수가 쓰인다

a1 = np.ones((2,3))
print(a1)
a2 = np.zeros((2,2))
print(a2)
print(np.hstack([a1,a2])) # hstack은 연속적인 변수만 사용 가능 행의 수가 동일한 2개 이상의 배열을 연결
print(np.hstack([a1,a2])) # vstack은 열의 개수가 동일한 2개 이상의 배열을 위,아래로 연결
```





