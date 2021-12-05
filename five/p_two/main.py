fileInput = open("input.txt", "r")
fileInput = fileInput.readlines()
for line in range(0, len(fileInput)):
    fileInput[line] = fileInput[line].replace("\n", "")

points = {}

for coordinates in fileInput:
    vertical = coordinates.split(
        " -> ")[0].split(",")[0] == coordinates.split(" -> ")[1].split(",")[0]
    horizontal = coordinates.split(
        " -> ")[0].split(",")[1] == coordinates.split(" -> ")[1].split(",")[1]
    # if(horizontal):
    #     y = int(coordinates.split(" -> ")[0].split(",")[1])
    #     x1 = int(coordinates.split(" -> ")[0].split(",")[0])
    #     x2 = int(coordinates.split(" -> ")[1].split(",")[0])
    #     for i in range(min(x1, x2), max(x1, x2)+1):
    #         if(not points.get(f"{i}:{y}")):
    #             points[f"{i}:{y}"] = 1
    #         else:
    #             # change to more conscisce
    #             points[f"{i}:{y}"] = points[f"{i}:{y}"]+1
    # elif vertical:
    #     x = int(coordinates.split(" -> ")[0].split(",")[0])
    #     y1 = int(coordinates.split(" -> ")[0].split(",")[1])
    #     y2 = int(coordinates.split(" -> ")[1].split(",")[1])
    #     for i in range(min(y1, y2), max(y1, y2)+1):
    #         if(not points.get(f"{x}:{i}")):
    #             points[f"{x}:{i}"] = 1
    #         else:
    #             # change to more conscisce
    #             points[f"{x}:{i}"] = points[f"{x}:{i}"]+1
    x1 = int(coordinates.split(" -> ")[0].split(",")[0])
    x2 = int(coordinates.split(" -> ")[1].split(",")[0])
    y1 = int(coordinates.split(" -> ")[0].split(",")[1])
    y2 = int(coordinates.split(" -> ")[1].split(",")[1])

    for x in range(min(x1, x2), max(x1, x2)+1):
        for y in range(min(y1, y2), max(y1, y2)+1):
            if(not points.get(f"{x}:{y}")):
                points[f"{x}:{y}"] = 1
            else:
                # change to more conscisce
                points[f"{x}:{y}"] = points[f"{x}:{y}"]+1

count = 0
for coordinate, value in points.items():
    # print(coordinate, value)
    if value >= 2:
        count += 1
print(count)
