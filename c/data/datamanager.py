import json

class DB():
    def __init__(self, path='./data/series.json'):
        self.location = path
        self.data = ''
        self.error = 'False'

        try:
            with open(self.location, "r") as series:
                self.data = json.load(series)
        except:
            self.error = 'True'

    
    # bætir nýrri seríu í listann
    def add_series(self):
        pass


    # sækir lista af seríum
    def all_series(self):
        return self.data

    
    # sækir allar upplýsingar um eina seríu
    def single_series(self,id):
        result = next(series for series in self.data['series'] if series['id'] == str(id))
        return result
    
    def search_actor(self,query):
        result = None
        for series in self.data['series']:
            for actor in series['cast']:
                if actor['name'] == query:
                    result = series
                    
        return result
 

    # uppfærir upplýsingar um ákveðna seríu
    def update_series(self):
        pass


    # eyðir einni seríu úr series-listanum
    def delete_series(self):
        pass
