---
title: 'Rails'
---

# Rails

## Gems

### Capistrano
#### whenever
Fournit une syntaxe claire et simple pour écrire et déployer des cron jobs.
La commande `whenever` permet de lire/écrire dans le fichier `schedule.rb` et non directement dans le fichier crontab.

Exemple:
```
every 1.day, at: '4:30 am' do
  runner "MyModel.task_to_run_at_four_thirty_in_the_morning"
end

every '0 0 27-31 * *' do
  command "echo 'you can use raw cron syntax too'"
end
```

### Scenic
[Scenic](https://github.com/scenic-views/scenic) met à disposition des méthodes à `ActiveRecord::Migration` pour créer et gérer des views (voir la section dans postgresql).

Scenic permet:
- utiliser des views sans avoir à changer le format du schema en SQL. 
- convention pour versionner les views, tout en gardant l'historique de migration consistant et reversible.

Utile pour mettre en place des **materialized views**