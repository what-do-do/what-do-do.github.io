require 'find'
require 'json'

source = '.'
target = './test.json'

pdf_file_paths = []
Find.find(source) do |path|
  pdf_file_paths << path if path =~ /.+_.+_.+_.+\.md$/
end

resArray = [] 
iToIndex = { 0 => 'category', 1 => 'subcategory', 2 => 'description', 3 => 'id'}
for path in pdf_file_paths
  i = 0  
  res = {}
  path = path[2..(path.length-4)]
  for g1 in path.split('_')
    if i < 2
      value = g1.split('-')
    else
      value = g1
    end
    res[iToIndex[i]] = value
    i = i + 1
  end
  resArray.push(res)
end
File.write(target, JSON.generate(resArray))
