const swap = <T>(e1: T, e2: T): T[] => [e2, e1];

export class heapq<T> {
  _data: {
    p: number,
    d: T
  }[] = [];
  private _size: number = 0;

  enqueue = (priority: number, data: T) => {
    this._data.push({
      p: priority,
      d: data
    });
    if (this._size > 0) {
      let parent = Math.floor((this._size - 1) / 2);
      let index = this._size;
      while (parent >= 0) {
        if (this._data[parent].p < this._data[index].p) {
          [this._data[parent], this._data[index]] = swap(this._data[parent], this._data[index]);
          index = parent;
          parent = Math.floor((index - 1) / 2);
        } else {
          break;
        }
      }
    }
    this._size++;
  }
  dequeue = () => {
    if (this._size == 0) {
      return undefined;
    } else if (this._size == 1) {
      this._size--;

      const result = this._data[0];
      this._data = [];
      return result;
    } else {
      this._size--;

      let heap = this._data;
      const result = heap[0];
      heap[0] = heap.pop()!;

      let index = 0;
      let left = 1, right = 2;
      while (left < this._size) {
        if (right >= this._size) {
          if (heap[index].p < heap[left].p) {
            [heap[index], heap[left]] = swap(heap[index], heap[left]);
          }
          break;
        }
        if (heap[left].p < heap[right].p && heap[index].p < heap[right].p) {
          [heap[index], heap[right]] = swap(heap[index], heap[right]);
          index = right;
        } else if (heap[index].p < heap[left].p) {
          [heap[index], heap[left]] = swap(heap[index], heap[left]);
          index = left;
        } else {
          break;
        }
        left = Math.floor(index * 2) + 1;
        right = Math.floor(index * 2) + 2;
      }

      return result;
    }
  }
  top = () => {
    return this._data[0].d;
  }
  size = () => {
    return this._size;
  }
}