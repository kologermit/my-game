CREATE TABLE IF NOT EXISTS `themes` (
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT, 
  `name` VARCHAR(100) NOT NULL DEFAULT "StandartName",
  `data` VARCHAR(10000) NOT NULL DEFAULT `{
 "Games": {
  "500": {
   "question": "Question",
   "answer": "Answer" 
  },
  "400": {
   "question": "Question",
   "answer": "Answer" 
  },
  "300": {
   "question": "Question",
   "answer": "Answer" 
  }
 }
}`,
  PRIMARY KEY (`id`)
)