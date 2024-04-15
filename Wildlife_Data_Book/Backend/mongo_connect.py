from pymongo import MongoClient
conn = MongoClient('mongodb+srv://anujkakde24:mongopwd@dbms-cluster.hpswvve.mongodb.net/?retryWrites=true&w=majority')
db = conn["Wildlife_database"]