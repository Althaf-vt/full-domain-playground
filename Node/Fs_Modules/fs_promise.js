const fs = require('fs').promises;

const combineFiles = async(file1, file2, outputFile) => {
    try {
        const [data1, data2] = await Promise.all([
            fs.readFile(file1, 'utf-8'),
            fs.readFile(file2, 'utf-8'),
        ])

        await fs.appendFile(outputFile,`${data1}\n${data2}\n`);
        console.log('done')
    } catch (error) {
        console.log(error)
    }
}

combineFiles('Promise1.txt','Promise2.txt','Promise_Output.txt')