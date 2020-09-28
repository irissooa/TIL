# 4. Graph => 비선형 구조

<br>

### (1) 그래프

- 정점과 간선의 집합을 그래프라고 한다.
- 정점과 간선의 연결관계가 있어서 방향성이 없는 그래프를 'Undirected Graph', 간선에 방향성이 포함되어 있는 그래프를 'Directed Graph'라고 한다.
- 간선에 가중치 정보를 두어서 구성한 그래프와 그렇지 않은 비가중치 그래프가 있다.

- 그래프를 구현하는 방법
  - 인접 행렬
    - 해당하는 위치의 값을 통해서 정점들 간의 연결 관계를 <b>O(1)</b>의 시간 복잡도로 파악할 수 있다.
    - 간선의 개수와는 무관하게 <b>O(V<sup>2</sup>)</b>의 공간 복잡도를 갖는다. 그래서 쓸 때 없이 메모리를 많이 쓰게 되는 단점이 있다.
  - 인접 리스트
    - 시작 정점을 기준으로 어떤 정점과 연결되어 있는지에 대한 정보만 담고 있다.
    - 연결 리스트를 이용해서 구현하기 때문에 정점 간 연결되어있는지 확인하는데 다소 오래 걸린다.
    - 공간 복잡도는 <b>O(E + V)</b>이다.

<br>

### (2) 탐색 방법① - DFS

- 임의의 한 정점으로부터 연결되어 있는 한 정점으로만 나아가면서 더 이상 갈 곳이 없을 때까지 탐색한다.
- 더 이상 연결된 곳이 없다면 그 전 단계로 돌아와서 다른 방향의 정점으로 탐색하는 방식이다.
- 가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 DFS를 반복해야 하므로 LIFO 구조의 스택을 사용한다.
- 시간 복잡도 : <b>O(V + E)</b>(V: 정점 개수, E: 간선 개수)

<br>

### (3) 탐색 방법② - BFS

- 임의의 한 정점을 탐색 시작점으로 하고 이와 인접한 정점들을 먼저 모두 차례로 방문한 후에, 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 차례로 방문하는 방식
- 인접한 정점들에 대해 탐색한 후, 차례로 다시 BFS를 진행해야하므로 FIFO 형태의 자료구조인 큐를 사용한다.
- 시간 복잡도 : <b>O(V + E)</b>

<br>

### :mag: DFS vs BFS

![BFS-DFS](https://user-images.githubusercontent.com/52685250/63823611-6ac03b00-c98f-11e9-81bd-29d1517772b1.png)

<br>

### (4) 최소 신장 트리(MST; Minimum Spanning Tree)

- 그래프에서 모든 정점을 연결하는 간선들의 가중치의 합이 최소가 되는 트리
- 두 정점 사이의 최소 비용의 경로를 찾을 때 사용
- Spanning Tree : 그래프에서 모든 정점이 사이클 없이 연결된 형태

<br>

### (5) Kruskal 알고리즘

- 간선을 하나씩 선택해서 MST를 찾는 알고리즘
  - 모든 간선을 가중치에 따라 오름차순으로 정렬
  - 가중치가 낮은 간선부터 선택하면서 트리를 증가하는데 만약 사이클이 존재한다면 해당 간선은 제외하고 다음으로 가중치가 낮은 간선을 선택한다.

  - 정점의 개수가 E일 때 선택된 간선의 개수가 E - 1이 될 때까지 반복하는 알고리즘

- 시간 복잡도 : <b>O(ElogE)</b>

<br>

### (6) Prim 알고리즘

- 하나의 정점에서 연결된 간선들 중 하나씩 선택하면서 MST를 찾는 알고리즘
  - 임의의 한 정점을 선택
  - 선택한 정점들과 인접하는 정점들 중 최소 비용 간선이 존재하는 정점을 선택
  - 모든 정점이 선택될 때까지 위 과정을 반복
- 시간 복잡도 : <b>O(ElogV)</b>

<br>

### (7) Dijkstra 알고리즘

- 시작 정점에서 거리가 최소인 정점을 선택해 나가면서 최단 경로를 구하는 방식
- 시작점에서 도착점까지 최단 경로를 구하려면 나머지 정점들에 대한 최단경로도 구한다.
- 탐욕 기법을 사용한 알고리즘으로 MST의 Prim 알고리즘과 유사하다.