# Hash Table

Hash Table is a data structure that allows efficient data retrieval. Every data in hash table is stored as a key value pairs.

*Operations in Hash Table*

- Insertion -> O(1) 
- Lookup(Get) -> O(1)
- Deletion -> O(1)
- Size(count) -> O(1)
- Contains -> O(1)
- Key Enumeration(Retrieving all the keys in the Hash Table) -> O(n)
- Value Enumeration(Retrieving all the values in Hash Table) -> O(n)
- Clear -> O(n)
- Rehashing -> O(n)

*Hash Function* - A function that takes a input value (key) and produces a hash code that representes where that data should be stored in the table.

*Bucket* - Bucket is a storage location in hash table where the data is stored.

*Collision* - A situation when two or more key gives the same storage location in a hash table.

*Collision Handling* - The process of handling the collision that happens in the hash table. Chaining and Open Addressing are the commonly used collision Handling techniques.

*Load Factor* - Load factor is the ratio of number of stored key value pairs and the number of total buckets in the hash table.

*Resizing* - The process of increasing or decreasing the number of buckets in the hash table.

*Key* - Unique identifier of a data element.

*Value* - The value stored in the element.

*Hash Code* - Unique numeric value which is produced by the hash function.

*Collision Avoidance* - Techniques Used to minimize the collision in the hash table.
    1.Chaining
    2.Open Addressing(Probe)
    3.Robin Hood Hasing
    4.Linear Probing
    5.Quadratic Probing
    6.Double Hashing

**Application of Hash Table**
1. Used in DB indexing 
2. URL shortening services
3. Used in searching for big amount of data
4. Phone Books

**Advantages of Hash Table**
1. Fast Data Retrieval
2. Efficient Data Searching
3. Memory Efficient
4. Simplicity

**Dis-advantages of Hash Table**
1. Collision
2. Sorting is Difficult
3. Hash Function Dependancy
4. Complicated Implimentation


![](images/hash-table.png)