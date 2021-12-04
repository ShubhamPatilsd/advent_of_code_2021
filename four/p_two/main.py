import copy
file = open("./input.txt", "r")
input = file.readlines()

while("\n" in input):
    input.remove("\n")

for line in range(0, len(input)):
    input[line] = input[line].split("\n")[0]

numbers = input[0].split("\n")[0].split(",")
input.remove(input[0])

for thing in range(len(input)):
    input[thing] = input[thing].split(" ")
    # print(input[thing])
    while("" in input[thing]):
        input[thing].remove("")

    # print(input[thing])

bingo = False
winners = {}
dummy = copy.deepcopy(input)
for num in numbers:
    i = 0
    while i < len(input)-4:
        # checks every entry and changes if its elements == num
        # if(bingo):
        #     sum = 0
        #     for aa in range(0, 5):
        #         for ee in input[i+aa]:
        #             if ee != "X":
        #                 sum += int(ee)
        #     print(sum, num)
        #     break

        for thing in range(0, 5):

            for item in range(len(input[i+thing])):
                if(input[i+thing][item] == num):
                    input[i+thing][item] = "X"

            # check column
            for apple in range(0, 5):
                column_sum = 0
                for bruh in range(0, 5):
                    if(input[i+bruh][apple] == "X"):
                        column_sum += 1
                # print(column_sum, i)
                if(column_sum == 5):
                    if(not winners.get(i)):
                        sum_thing = 0
                        for lack in range(0, 5):
                            for broski in range(0, 5):
                                if(input[i+lack][broski] != "X"):
                                    sum_thing += int(input[i+lack][broski])
                        winners[i] = [num, sum_thing]

            # check row
            row_sum = 0
            for x in input[i+thing]:
                if(x == "X"):
                    row_sum += 1
            # print(input[i+thing])
            if(row_sum == 5):
                print(i)
                if(not winners.get(i)):
                    sum_thing = 0
                    for lack in range(0, 5):
                        for broski in range(0, 5):
                            if(input[i+lack][broski] != "X"):
                                sum_thing += int(input[i+lack][broski])
                    winners[i] = [num, sum_thing]

        i += 5

print(winners)
print(dummy)
result = winners.popitem()
print(int(result[1][0])*int(result[1][1]))
