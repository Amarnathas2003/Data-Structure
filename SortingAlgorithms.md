-----1.**Bubble Sort**-----

/** In Bubble Sort we are comparing the adjacent elements and swapping the values. When one round of exicution is completed, the largest element in the array will be at the last position of the array. **\

**Steps of Bubble Sort**

-> Run a outer for loop that goes till the array.length

-> Run a inner loop (nested for loop) that goes upto array.length - i
  #  Why array.length - i time ?
   Because when the first exicution round is completed the largest value will be at the last position of the array, So now we don't have to go again till the last position.

-> Compare the adjecent values (array[j] and array[j-1]) and swapp the small value to the front of the array.

-> Countinue the process until outer loop reaches array.length.



###### Bubble Sort Time Complexity = *O(n^2)* In the average and worst case, N elements need to be sorted and N elements need to the compared with the adjecent elemets.
 
###### Bubble Sort Space Complexity = *O(1)* It takes constant amount of Space.


-----2.**Selection Sort**-----

/** In Selection Sort first we finds the minimum element index from the array and puts that index value in the first position of the array.It uses outer loop i and a inner loop j .At first we assumes the minumum index as i and inside the j loop we compare j the position value and the current min index value if we found a value less than the current minIndex we change the current minIndex to the new minIndex.   

**Steps of Selection Sort**

-> Run an outer loop that goes upto the array.length - 1 position
   ## Why array.length - i time ?
   Beacuse in the inner loop we are starting with the *i + 1* position, and if the the outer loop goes upto the array.length then the inner loop will start from the *i + 1* position which will give the exception Array Out Of Boundes.

-> Take the minimum value index as i and inside the inner loop check there exist any other index that holds minimum element than the current minimum index.

-> If the minimum index is not still the value of i swap the minimum index values.


###### Selection Sort Time Complexity = *O(n^2)* In the worst case, selection sort have to travel through the N elements.The first loop and the second loop will go for N times.
 
###### Selection Sort Space Complexity = *O(1)* It takes constant amount of Space to exicute the algorithm.


-----2.**Insertion Sort**-----

/** In Insertion sort we are spliting the array into to parts Sorted part and Unsorted part. And values from the unsorted part are picked and placed into the sorted part.


**Steps of Insertion Sort**
. Run a for loop that goes upto array.length - 1
  ## Why array.length - i time ?
   Beacuse in the inner j loop we are starting with the *i + 1* position, and if the the outer loop goes upto the array.length then the inner loop will start from the *i + 1* position which will give the exception Array Out Of Boundes.

- Run a j loop that starts from *i + 1* position upto *j > 0* and decrement the j value after each iteration.

- Inside the inner loop j, compare the array[j] value and the array[j-1] value and swap the smallest value to the front. It will countinue until the j becomes 0.

- Once if we found get if condition is false we can break from the loop because the the values before that will be alredy sorted.

- Finally we can return the Sorted Array.


###### Insertion Sort Time Complexity = *O(n^2)* worst case and the average case, where "n" is the number of elements in the array to be sorted.
 
###### Insertion Sort Space Complexity = *O(1)* It takes constant amount of Space to exicute the algorithm.