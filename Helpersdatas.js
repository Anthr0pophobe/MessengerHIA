let citiesRef = db.collection("notifs")

citiesRef.document("SF").setData([
    "name": "San Francisco",
    "state": "CA",
    "country": "USA",
    "capital": false,
    "population": 860000,
    "regions": ["west_coast", "norcal"]
    ])
citiesRef.document("LA").setData([
    "name": "Los Angeles",
    "state": "CA",
    "country": "USA",
    "capital": false,
    "population": 3900000,
    "regions": ["west_coast", "socal"]
    ])
citiesRef.document("DC").setData([
    "name": "Washington D.C.",
    "country": "USA",
    "capital": true,
    "population": 680000,
    "regions": ["east_coast"]
    ])
citiesRef.document("TOK").setData([
    "name": "Tokyo",
    "country": "Japan",
    "capital": true,
    "population": 9000000,
    "regions": ["kanto", "honshu"]
    ])
citiesRef.document("BJ").setData([
    "name": "Beijing",
    "country": "China",
    "capital": true,
    "population": 21500000,
    "regions": ["jingjinji", "hebei"]
    ])
