f = open("../input.txt", "r")
input_data = f.readlines()

for i in range(len(input_data)):
    input_data[i] = int(input_data[i].split("\n")[0])

last = 0
count = 0
for i in range(len(input_data)-3):
    sum = input_data[i] + input_data[i+1] + input_data[i+2]
    if sum > last:
        count += 1
    last = sum

print(count)
